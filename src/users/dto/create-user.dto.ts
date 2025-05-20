// users/dto/create-user.dto.ts
import { IsString, IsDate, IsEnum, IsNotEmpty, Matches, isString, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

enum Gender {
    Male = 'M',
    Female = 'F',
}

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    username: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsString()
    @IsNotEmpty()
    first_name: string;

    @IsString()
    @IsNotEmpty()
    last_name: string;

    @IsString()
    @IsOptional()
    phone_number: string;

    @IsString()
    @IsNotEmpty()
    @Matches(/^\d{7,9}$/, { message: 'ID number must have between 7 and 9 digits' })
    id_number: string;

    @Type(() => Date)
    @IsDate({ message: 'Date of birth must be a valid date' })
    birth_date: Date;

    @IsEnum(Gender, { message: 'Gender should be M or F' })
    gender: Gender;
}
