import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './entities/user.entity';
import { Repository } from 'typeorm';
  @Injectable()
  export class UsersService {
    constructor(@InjectRepository(Users) private userRepository: Repository<Users>) {}

    async findByEmail(email: string) {
      return this.userRepository.findOne({ where: { email } });
    }
    
    async create(createUserDto: CreateUserDto) {
      const user = this.userRepository.create(createUserDto);
      return this.userRepository.save(user);
    }

    
  }
  

