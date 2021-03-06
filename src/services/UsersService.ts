import { getCustomRepository, Repository } from "typeorm";
import { User } from "../entities/User";
import { UsersRepository } from "../repositories/UsersRepository";

class UsersService {
    private usersRepository: Repository<User>;
    constructor() {
        this.usersRepository = getCustomRepository(UsersRepository);
    }

    async create(email: string) {
        //Verifica se o usuario existe
        const userExists = await this.usersRepository.findOne({
            email
        });
        //Caso exista, retorte user
        if (userExists) {
            return userExists;
        }

        //Caso nao exista, salve no BD
        const user = this.usersRepository.create({
            email
        });

        await this.usersRepository.save(user);
        return user;
    }
}

export { UsersService };