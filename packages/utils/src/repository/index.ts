import {
  ensureDir,
  emptyDir,
} from 'fs-extra'
import execa from 'execa'

import {
  getGHToken,
  getNextVersion,
} from '../tokens'

// -----------------------------------------------------------------------------

type Options = {
  user:       string
  repository: string
  dist:       string
}

// -----------------------------------------------------------------------------

export class Repository {
  public static async newRepository (options: Options) {
    return new Repository()._constructor(options)
  }

  // ---------------------------------------------------------------------------

  private _user!:       string
  private _repository!: string
  private _distPath!:   string

  private async _constructor (options: Options) {
    this._user       = options.user
    this._repository = options.repository
    this._distPath   = options.dist

    return this
  }

  // ---------------------------------------------------------------------------

  async init () {
    await this._prepareDir()
    await this._cloneRepository()
    await this._clearRepository()

    {
      const { stdout } = await this._run('pwd')

      console.log('---------------------------------------------')
      console.log(stdout)
      console.log('---------------------------------------------')
    }

    {
      const { stdout } = await this._run('ls -lah1')

      console.log('---------------------------------------------')
      console.log(stdout)
      console.log('---------------------------------------------')
    }
  }

  async update () {
    await this._updateRepository()
    await this._pushRepository()
  }

  // ---------------------------------------------------------------------------

  private async _run (command: string | string[]) {
    let cmd = ''

    if (typeof command === 'string') {
      cmd = command
    } else {
      cmd = command.join(' ')
    }

    return execa.command(
      cmd,
      {
        cwd:   this._distPath,
        shell: true,
      }
    )
  }

  private async _prepareDir () {
    await ensureDir(this._distPath)
    await emptyDir(this._distPath)
  }

  private async _cloneRepository () {
    const token = getGHToken()

    await this._run([
      'git clone',
      `https://${token}@github.com/${this._user}/${this._repository}.git`,
      this._distPath,
    ])
  }

  private async _clearRepository () {
    await this._run('git rm -r *')
  }

  private async _updateRepository () {
    await this._run('git add -A')

    const version = getNextVersion()

    await this._run([
      'git commit',
      '--allow-empty',
      `-m "chore(release): ${version} [skip ci]"`,
    ])
  }

  private async _pushRepository () {
    try {
      await this._run('git push -u origin main --force')
    } catch (e) {
      console.log(e)
      throw e
    }
  }
}

// -----------------------------------------------------------------------------

export const newRepository = async (options: Options) => {
  return Repository.newRepository(options)
}
