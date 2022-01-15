import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

import { SensorDevice } from "./SensorDevice";

@Entity("users")
class User {
  @PrimaryGeneratedColumn() id: number;

  @Column() username: string;

  @Column() email: string;

  @OneToMany(() => SensorDevice, (device) => device.user)
  sensorDevices: SensorDevice[];
}

export { User };
