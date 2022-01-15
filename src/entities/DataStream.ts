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
  @PrimaryGeneratedColumn() id: string;

  @Column({ unique: true }) key: string;

  @Column() label: string;

  @Column({ default: false }) enabled: boolean;

  @Column() unitId: string;

  @Column() deviceId: string;

  @ManyToOne(() => MeasurementUnit)
  measurementUnit: MeasurementUnit;

  @ManyToOne(() => SensorDevice, (device) => device.streams)
  device: SensorDevice;

  @OneToMany(() => SensorData, (data) => data.dataStream)
  measurements: SensorData[];
}

export { DataStream };
