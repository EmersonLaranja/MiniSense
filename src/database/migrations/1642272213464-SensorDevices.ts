import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class SensorDevices1642272213464 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "sensorDevices",
        columns: [
          {
            name: "id",
            type: "number",
            isPrimary: true,
          },
          {
            name: "key",
            type: "varchar",
            isUnique: true,
          },
          {
            name: "label",
            type: "varchar",
          },
          {
            name: "description",
            type: "varchar",
          },
          {
            name: "userId",
            type: "number",
          },
        ],
      })
    );

    await queryRunner.createForeignKey(
      "sensorDevices",
      new TableForeignKey({
        name: "FKUser",
        referencedTableName: "users",
        referencedColumnNames: ["id"],
        columnNames: ["userId"],
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("sensorDevices", "FKUsers");
    await queryRunner.dropTable("sensorDevices");
  }
}
