import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { SettingsRepository } from "../repositories/SettingsRepository";
import { SettingsServices } from "../services/SettingServices";

class SettingsController {
    async create(request: Request, response: Response) {
        const { chat, username } = request.body;
        const settingsServices = new SettingsServices();
        try {
            const settings = await settingsServices.create({ chat, username });
            return response.json(settings);
        } catch (error) {
            return response.status(400).json({
                message: error.message
            })
        }
    }
}

export { SettingsController };