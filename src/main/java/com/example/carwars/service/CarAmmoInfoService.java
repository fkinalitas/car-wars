package com.example.carwars.service;

import com.example.carwars.dto.CarInfoDto;
import org.springframework.stereotype.Service;

@Service
public class CarAmmoInfoService {

    public CarInfoDto getCarAmmoInfo() {

        return new CarInfoDto("ammo", "pieces", 1000);
    }

}
