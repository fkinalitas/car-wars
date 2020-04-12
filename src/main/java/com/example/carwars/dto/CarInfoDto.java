package com.example.carwars.dto;

import java.util.Random;

public class CarInfoDto {
    private String key;
    private String type;
    private int maxValue;
    private int value;

    public CarInfoDto(String key, String type, int maxValue) {
        this.key = key;
        this.type = type;
        this.maxValue = maxValue;

        Random rand = new Random();

        this.value = rand.nextInt(maxValue);
    }

    public String getKey() {
        return key;
    }

    public String getType() {
        return type;
    }

    public int getMaxValue() {
        return maxValue;
    }

    public int getValue() {
        return value;
    }

    public void setValue(int value) {
        this.value = value;
    }
}
