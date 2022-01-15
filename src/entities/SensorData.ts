import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

import { DataStream } from "./DataStream";
import { MeasurementUnit } from "./MeasurementUnit";

@Entity("sensorDatas")
class SensorData {
  @PrimaryGeneratedColumn() id: number;

  @Column() timestamp: Date;

  @Column() value: number;

  @Column() dataStreamId: number;

  @Column() unitId: number;

  @ManyToOne(() => DataStream)
  dataStream: DataStream;

  @ManyToOne(() => MeasurementUnit)
  measurementUnit: MeasurementUnit;
}

export { SensorData };
