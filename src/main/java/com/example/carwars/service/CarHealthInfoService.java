package com.example.carwars.service;

import com.example.carwars.dto.CarInfoDto;
import org.springframework.stereotype.Service;


@Service
public class CarHealthInfoService {

    public CarInfoDto getCarHealthInfo() {

        return new CarInfoDto("health", "health", 100);
    }

}
