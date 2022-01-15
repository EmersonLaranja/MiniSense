import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

import { MeasurementUnit } from "./MeasurementUnit";
import { SensorData } from "./SensorData";
import { SensorDevice } from "./SensorDevice";

@Entity("dataStreams")
class DataStream {
  @PrimaryGeneratedColumn() id: number;

  @Column({ unique: true }) key: string;

  @Column() label: string;

  @Column({ default: false }) enabled: boolean;

  @Column() unitId: number;

  @Column() deviceId: number;

  @ManyToOne(() => MeasurementUnit)
  measurementUnit: MeasurementUnit;

  @ManyToOne(() => SensorDevice, (device) => device.streams)
  device: SensorDevice;

  @OneToMany(() => SensorData, (data) => data.dataStream)
  measurements: SensorData[];
}

export { DataStream };
