import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { validate } from 'class-validator';

@Injectable()
export class UserService {
  private users: User[] = [{
    "email": "admin@gmail.com",
    "password": "12345678",
    "name": "Francisco",
    "lname": "Guerrero",
    "role":"admin"
  }];

  async create(createUserDto: CreateUserDto): Promise<User> {
    const newUser: User = {
      id: this.users.length,
      email: createUserDto.email,
      name: createUserDto.name,
      lname: createUserDto.lname,
      password: createUserDto.password,
      role: "user"
    };

    await this.validateUser(newUser);

    this.users.push(newUser);
    return newUser;
  }

  findAll(): User[] {
    return this.users;
  }

  findOne(id: number): User {
    const user = this.users.find((user) => user.id === id);
    return user;
  }

  findByEmail(email: string): User {
    const user = this.users.find((user) => user.email === email);
    return user;
  }
  

  update(id: number, updateUserDto: UpdateUserDto): User {
    const userIndex = this.users.findIndex((user) => user.id === id);

    if (!userIndex && userIndex != 0) {
      throw new BadRequestException('User not found');
    }

    let updatedUser: User = { ...this.users[userIndex], ...updateUserDto };

    this.users[userIndex] = updatedUser

    return updatedUser;
  }

  remove(id: number): string {
    this.users = this.users.filter((user) => user.id !== id);
    return `User with ID ${id} has been removed`;
  }

  private async validateUser(user: User): Promise<void> {
    const errors = await validate(user);

    if (errors.length > 0) {
      throw new BadRequestException('Validation failed');
    }
  }
}
