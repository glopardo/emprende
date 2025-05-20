
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { comparePasswords, hashPassword } from 'src/utils/encryption';

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService) {}

    async signIn(username: string, pass: string): Promise<any> {
        const user = await this.usersService.findOneByUserName(username);

        if (!await comparePasswords(pass, user?.password || '')) {
            throw new UnauthorizedException();
        }

        return user;
    }
}
