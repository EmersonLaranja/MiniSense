import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class DataStreams1642283189527 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "dataStreams",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "key",
            type: "varchar",
          },
          {
            name: "label",
            type: "varchar",
          },
          {
            name: "enabled",
            type: "boolean",
            default: false,
          },
          {
            name: "unitId",
            type: "string",
          },
          {
            name: "deviceId",
            type: "string",
          },
        ],
      })
    );

    await queryRunner.createForeignKey(
      "dataStreams",
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
      "dataStreams",
      new TableForeignKey({
        name: "FKSensorDevice",
        referencedTableName: "sensorDevices",
        referencedColumnNames: ["id"],
        columnNames: ["deviceId"],
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("dataStreams", "FKMeasurementUnit");
    await queryRunner.dropForeignKey("dataStreams", "FKSensorDevice");
    await queryRunner.dropTable("dataStreams");
  }
}
