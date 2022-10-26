const { Model, DataTypes, Deferrable } = require("sequelize");

class Foo extends Model {}
Foo.init({
  // instantiating will automatically set the flag to true if not set
  flag: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: true },

  // default values for dates => current time
  myDate: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },

  // setting allowNull to false will add NOT NULL to the column, which means an error will be
  // thrown from the DB when the query is executed if the column is null. If you want to check that a value
  // is not null before querying the DB, look at the validations section below.
  title: { type: DataTypes.STRING, allowNull: false },

  // Creating two objects with the same value will throw an error. The unique property can be either a
  // boolean, or a string. If you provide the same string for multiple columns, they will form a
  // composite unique key.
  uniqueOne: { type: DataTypes.STRING,  unique: 'compositeIndex' },
  uniqueTwo: { type: DataTypes.INTEGER, unique: 'compositeIndex' },

  // The unique property is simply a shorthand to create a unique constraint.
  someUnique: { type: DataTypes.STRING, unique: true },

  // Go on reading for further information about primary keys
  identifier: { type: DataTypes.STRING, primaryKey: true },

  // autoIncrement can be used to create auto_incrementing integer columns
  incrementMe: { type: DataTypes.INTEGER, autoIncrement: true },

  // You can specify a custom column name via the 'field' attribute:
  fieldWithUnderscores: { type: DataTypes.STRING, field: 'field_with_underscores' },

  // It is possible to create foreign keys:
  bar_id: {
    type: DataTypes.INTEGER,

    references: {
      // This is a reference to another model
      model: Bar,

      // This is the column name of the referenced model
      key: 'id',

      // With PostgreSQL, it is optionally possible to declare when to check the foreign key constraint, passing the Deferrable type.
      deferrable: Deferrable.INITIALLY_IMMEDIATE
      // Options:
      // - `Deferrable.INITIALLY_IMMEDIATE` - Immediately check the foreign key constraints
      // - `Deferrable.INITIALLY_DEFERRED` - Defer all foreign key constraint check to the end of a transaction
      // - `Deferrable.NOT` - Don't defer the checks at all (default) - This won't allow you to dynamically change the rule in a transaction
    }
  },

  // Comments can only be added to columns in MySQL, MariaDB, PostgreSQL and MSSQL
  commentMe: {
    type: DataTypes.INTEGER,
    comment: 'This is a column name that has a comment'
  }
}, {
  sequelize,
  modelName: 'foo',

  // Using `unique: true` in an attribute above is exactly the same as creating the index in the model's options:
  indexes: [{ unique: true, fields: ['someUnique'] }]
});