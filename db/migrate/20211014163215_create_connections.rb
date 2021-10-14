class CreateConnections < ActiveRecord::Migration[6.1]
  def change
    create_table :connections do |t|
      t.belongs_to :followers, null: false, foreign_key: true
      t.belongs_to :followed_by, null: false, foreign_key: true

      t.timestamps
    end
  end
end
