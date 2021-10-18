class CreateConnections < ActiveRecord::Migration[6.1]
  def change
    create_table :connections do |t|
      t.integer :follower_id
      t.integer :followee_id
      t.string :message
      t.timestamps
    end
  end
end
