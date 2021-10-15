class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password_digest
      t.string :first_name
      t.integer :age
      t.string :city
      t.string :state
      t.string :zip_code
      t.string :email
      t.string :image_url
      t.text :bio
      t.string :camp_type

      t.timestamps
    end
  end
end
