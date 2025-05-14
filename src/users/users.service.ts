import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ) {}

    create(user: Partial<User>) {
        const newUser = this.usersRepository.create(user);
        return this.usersRepository.save(newUser);
    }
    
    findAll() {
        return this.usersRepository.find();
    }
    
    findOne(id: string) {
        return this.usersRepository.findOneBy({ id });
    }

    async update(id: string, updatedUser: Partial<User>) {
        const user = await this.usersRepository.findOneBy({ id });
        if (!user) throw new NotFoundException(`User ${id} not found`);
        Object.assign(user, updatedUser);
        return this.usersRepository.save(user);
    }

    async remove(id: string) {
        const result = await this.usersRepository.delete(id);
        if (result.affected === 0) {
            throw new NotFoundException(`User ${id} not found`);
        }

        return { deleted: true };
    }
    
}
