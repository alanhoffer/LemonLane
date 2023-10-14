import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { UserDto } from '../auth/dto/user.dto';
import { updateUserDto } from './dto/update-user.dto';


@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) { }

  create(userDTO: UserDto) {
    return this.userRepository.save(userDTO);
  }

  findAll() {
    return this.userRepository.find();
  }

  findByEmail(email: string) {
    return this.userRepository.findOneBy({ email });
  }

  findByEmailWithPassword(email: string) {
    return this.userRepository.findOne({
      where: { email },
      select: ['id', 'name', 'lname', 'email', 'password'],
    });
  }

  findOne(id: number) {
    return this.userRepository.findOne({
      where: { id }
    });
  }
  async updateUser(id: number, updateUserDto: updateUserDto): Promise<User> {
    const user = await this.userRepository.findOne({ where: { id } });

    if (!user) {
      throw new NotFoundException(`El usuario con el ID ${id} no se encontró.`);
    }

    if (updateUserDto.email) {
      user.email = updateUserDto.email;
    }
    if (updateUserDto.name) {
      user.name = updateUserDto.name;
    }
    if (updateUserDto.lname) {
      user.lname = updateUserDto.lname;
    }
    if (updateUserDto.password) {
      user.password = updateUserDto.password;
    }


    await this.userRepository.save(user);

    return user;
  }

  remove(id: number) {
    return this.userRepository.delete(id);
  }

}