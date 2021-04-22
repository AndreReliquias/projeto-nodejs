import { getCustomRepository, Repository } from "typeorm";
import { Setting } from "../entities/Setting";
import { SettingsRepository } from "../repositories/SettingsRepository"

interface ISettingsCreate {
    chat: boolean;
    username: string;
}

class SettingsServices {
    private settingsRepository: Repository<Setting>;
    constructor() {
        this.settingsRepository = getCustomRepository(SettingsRepository);
    }

    async create({ chat, username }: ISettingsCreate) {
        // SELECT * FROM settings WHERE username = "?" limit 1;
        const userAlredyExists = await this.settingsRepository.findOne({
            username
        })

        if (userAlredyExists) {
            throw new Error("User already exists!");
        }

        const settings = this.settingsRepository.create({
            chat,
            username,
        });

        await this.settingsRepository.save(settings);

        return settings;
    }
}

export { SettingsServices };