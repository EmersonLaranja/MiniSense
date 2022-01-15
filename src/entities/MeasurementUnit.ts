import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("measurementUnits")
class MeasurementUnit {
  @PrimaryGeneratedColumn() id: number;

  @Column() symbol: string;

  @Column() description: string;
}

export { MeasurementUnit };
