import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { UpdateSettingInput } from './dto/update-setting.input';
import { Setting } from './entities/setting.entity';

@Injectable()
export class SettingsService {
  constructor(
    @InjectRepository(Setting)
    private readonly settingRepository: Repository<Setting>,
  ) {}

  public async findAll(): Promise<Setting[]> {
    return await this.settingRepository.find();
  }

  public async findOneById(id: string): Promise<Setting> {
    return await this.settingRepository.findOne({ where: { id: id } });
  }

  public async update(updateSetting: UpdateSettingInput): Promise<Setting> {
    const setting = await this.settingRepository.preload({ id: updateSetting.id });

    if (setting) {
      return await this.settingRepository.save(Object.assign(setting, updateSetting));
    }
  }
}
