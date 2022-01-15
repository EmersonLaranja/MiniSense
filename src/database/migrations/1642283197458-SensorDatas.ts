import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class SensorDatas1642283197458 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "sensorDatas",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "timestamp",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "value",
            type: "number",
          },
          {
            name: "unitId",
            type: "string",
          },
          {
            name: "dataStreamId",
            type: "string",
          },
        ],
      })
    );

    await queryRunner.createForeignKey(
      "sensorDatas",
      new TableForeignKey({
        name: "FKMeasurementUnit",
        referencedTableName: "measurementUnits",
        referencedColumnNames: ["id"],
        columnNames: ["unitId"],
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
      })
    );
    await queryRunner.createForeignKey(
      "sensorDatas",
      new TableForeignKey({
        name: "FKDataStream",
        referencedTableName: "dataStreams",
        referencedColumnNames: ["id"],
        columnNames: ["dataStreamId"],
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("sensorDatas", "FKMeasurementUnit");
    await queryRunner.dropForeignKey("sensorDatas", "FKDataStream");
    await queryRunner.dropTable("sensorDatas");
  }
}
