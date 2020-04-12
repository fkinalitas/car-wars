package com.example.carwars.service;

import com.example.carwars.dto.CarInfoDto;
import org.springframework.stereotype.Service;


@Service
public class CarFuelInfoService {

    public CarInfoDto getFuelAmmoInfo() {

        return new CarInfoDto("fuel", "liter", 60);
    }

}
