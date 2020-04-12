package com.example.carwars.controller;

import com.example.carwars.dto.CarInfoDto;
import com.example.carwars.service.CarAmmoInfoService;
import com.example.carwars.service.CarFuelInfoService;
import com.example.carwars.service.CarHealthInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class InfoController {

    @Autowired
    CarAmmoInfoService carAmmoInfoService;

    @Autowired
    CarHealthInfoService carHealthInfoService;

    @Autowired
    CarFuelInfoService carFuelInfoService;


    @GetMapping("/info/{type}")
    public ResponseEntity<CarInfoDto> getCarInfo(@PathVariable String type) {

        if ("ammo".equals(type)) {
            return ResponseEntity.ok(carAmmoInfoService.getCarAmmoInfo());
        } else if ("health".equals(type)) {
            return ResponseEntity.ok(carHealthInfoService.getCarHealthInfo());
        } else if ("fuel".equals(type)) {
            return ResponseEntity.ok(carFuelInfoService.getFuelAmmoInfo());
        } else {
            return ResponseEntity.notFound().build();
        }

    }

}
