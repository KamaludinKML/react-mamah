using System.Data;
using MySql.Data.MySqlClient;

public class DbManager
{
    private readonly string connectionString;
    private readonly MySqlConnection _connection;

    public DbManager(IConfiguration configuration)
    {
        connectionString = configuration.GetConnectionString("DefaultConnection");
        _connection = new MySqlConnection(connectionString);
    }

    //Produk
    public List<Produk> GetAllProduks()
    {
        List<Produk> produkList = new List<Produk>();
        try
        {
            using (MySqlConnection connection = new MySqlConnection(connectionString))
            {
                string query = "SELECT * FROM dataproduk";
                MySqlCommand command = new MySqlCommand(query, connection);
                connection.Open();
                using (MySqlDataReader reader = command.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        Produk produk = new Produk
                        {
                            id = Convert.ToInt32(reader["Id"]),
                            namaproduk = reader["Namaproduk"].ToString(),
                            stock = Convert.ToInt32(reader["Stock"]),
                            hargasatuan = Convert.ToInt32(reader["Hargasatuan"]),
                        };
                        produkList.Add(produk);
                    }
                }
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine(ex.Message);
        }
        return produkList;
    }

    public class IndeksProdukInfo
    {
        public int id { get; set; }
        public string? namaproduk { get; set; }
        public int stock { get; set; }
        public int hargasatuan { get; set; }
    }

    public List<IndeksProdukInfo> GetByIdProduks(int produk)
    {
        List<IndeksProdukInfo> indeksProdukList = new List<IndeksProdukInfo>();
        try
        {
            using (MySqlConnection connection = _connection)
            {
                string query = "SELECT * FROM dataproduk WHERE id = ?";
                using (MySqlCommand command = new MySqlCommand(query, connection))
                {
                    command.Parameters.AddWithValue("@Id", produk);
                    connection.Open();
                    using (MySqlDataReader reader = command.ExecuteReader())
                    {
                        while (reader.Read())
                        {
                            IndeksProdukInfo info = new IndeksProdukInfo
                            {
                                id = Convert.ToInt32(reader["Id"]),
                                namaproduk = reader["Namaproduk"].ToString(),
                                stock = Convert.ToInt32(reader["Stock"]),
                                hargasatuan = Convert.ToInt32(reader["Hargasatuan"]),
                            };
                            indeksProdukList.Add(info);
                        }
                    }
                }
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine(ex.Message);
        }
        return indeksProdukList;
    }

    public int CreateProduk(Produk produk)
    {
        using (MySqlConnection connection = _connection)
        {
            string query = "INSERT INTO dataproduk (id, namaproduk, stock, hargasatuan) VALUES (@Id, @Namaproduk, @Stock, @Hargasatuan)";
            using (MySqlCommand command = new MySqlCommand(query, connection))
            {
                command.Parameters.AddWithValue("@Id", produk.id);
                command.Parameters.AddWithValue("@Namaproduk", produk.namaproduk);
                command.Parameters.AddWithValue("@Stock", produk.stock);
                command.Parameters.AddWithValue("@Hargasatuan", produk.hargasatuan);

                connection.Open();
                return command.ExecuteNonQuery();
            }
        }
    }

    public int UpdateProduk(int id, Produk produk)
    {
        using (MySqlConnection connection = _connection)
        {
            string query = "UPDATE dataproduk SET namaproduk = @Namaproduk, stock = @Stock, hargasatuan = @Hargasatuan WHERE id = @Id";
            using (MySqlCommand command = new MySqlCommand(query, connection))
            {
                command.Parameters.AddWithValue("@Id", id);
                command.Parameters.AddWithValue("@Namaproduk", produk.namaproduk);
                command.Parameters.AddWithValue("@Stock", produk.stock);
                command.Parameters.AddWithValue("@Hargasatuan", produk.hargasatuan);

                connection.Open();
                return command.ExecuteNonQuery();
            }
        }
    }

    public int DeleteProduk(int id)

    {
        using (MySqlConnection connection = _connection)
        {
            string query = "DELETE FROM dataproduk WHERE id = @Id";
            using (MySqlCommand command = new MySqlCommand(query, connection))
            {
                command.Parameters.AddWithValue("@Id", id);
                connection.Open();
                return command.ExecuteNonQuery();
            }
        }
    }

    //Karyawan
    public List<Karyawan> GetAllKaryawans()
    {
        List<Karyawan> karyawanList = new List<Karyawan>();
        try
        {
            using (MySqlConnection connection = new MySqlConnection(connectionString))
            {
                string query = "SELECT * FROM data_karyawan";
                MySqlCommand command = new MySqlCommand(query, connection);
                connection.Open();
                using (MySqlDataReader reader = command.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        Karyawan karyawan = new Karyawan
                        {
                            id = Convert.ToInt32(reader["Id"]),
                            nama_karyawan = reader["nama_karyawan"].ToString(),
                            tgl_lahir = reader.GetDateTime(reader.GetOrdinal("Tgl_lahir")),
                            jenis_kelamin = reader["Jenis_kelamin"].ToString(),
                            alamat = reader["Alamat"].ToString(),
                            noTlp = reader["NoTlp"].ToString(),
                        };
                        karyawanList.Add(karyawan);
                    }
                }
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine(ex.Message);
        }
        return karyawanList;
    }

    public class IndeksKaryawanInfo
    {
        public int id { get; set; }
        public string? nama_karyawan { get; set; }
        public DateTime tgl_lahir { get; set; }
        public string? jenis_kelamin { get; set; }
        public string? alamat { get; set; }
        public string? noTlp { get; set; }
    }

    public List<IndeksKaryawanInfo> GetByIdKaryawans(int karyawan)
    {
        List<IndeksKaryawanInfo> indeksKaryawanList = new List<IndeksKaryawanInfo>();
        try
        {
            using (MySqlConnection connection = _connection)
            {
                string query = "SELECT * FROM data_karyawan WHERE id = ?";
                using (MySqlCommand command = new MySqlCommand(query, connection))
                {
                    command.Parameters.AddWithValue("@Id", karyawan);
                    connection.Open();
                    using (MySqlDataReader reader = command.ExecuteReader())
                    {
                        while (reader.Read())
                        {
                            IndeksKaryawanInfo info = new IndeksKaryawanInfo
                            {
                                id = Convert.ToInt32(reader["Id"]),
                                nama_karyawan = reader["nama_karyawan"].ToString(),
                                tgl_lahir = reader.GetDateTime(reader.GetOrdinal("Tgl_lahir")),
                                jenis_kelamin = reader["Jenis_kelamin"].ToString(),
                                alamat = reader["Alamat"].ToString(),
                                noTlp = reader["NoTlp"].ToString(),
                            };
                            indeksKaryawanList.Add(info);
                        }
                    }
                }
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine(ex.Message);
        }
        return indeksKaryawanList;
    }

    public int CreateKaryawan(Karyawan karyawan)
    {
        using (MySqlConnection connection = _connection)
        {
            string query = "INSERT INTO data_karyawan (id, nama_karyawan, tgl_lahir, jenis_kelamin, alamat, noTlp) VALUES (@Id, @Nama_karyawan, @Tgl_lahir, @Jenis_kelamin, @Alamat, @NoTlp)";
            using (MySqlCommand command = new MySqlCommand(query, connection))
            {
                command.Parameters.AddWithValue("@Id", karyawan.id);
                command.Parameters.AddWithValue("@Nama_karyawan", karyawan.nama_karyawan);
                command.Parameters.AddWithValue("@Tgl_lahir", karyawan.tgl_lahir);
                command.Parameters.AddWithValue("@Jenis_kelamin", karyawan.jenis_kelamin);
                command.Parameters.AddWithValue("@Alamat", karyawan.alamat);
                command.Parameters.AddWithValue("@NoTlp", karyawan.noTlp);

                connection.Open();
                return command.ExecuteNonQuery();
            }
        }
    }

    public int UpdateKaryawan(int id, Karyawan karyawan)
    {
        using (MySqlConnection connection = _connection)
        {
            string query = "UPDATE data_karyawan SET nama_karyawan = @Nama_karyawan, tgl_lahir = @Tgl_lahir, jenis_kelamin = @Jenis_kelamin, alamat = @Alamat WHERE id = @Id";
            using (MySqlCommand command = new MySqlCommand(query, connection))
            {
                command.Parameters.AddWithValue("@Nama_karyawan", karyawan.nama_karyawan);
                command.Parameters.AddWithValue("@Tgl_lahir", karyawan.tgl_lahir);
                command.Parameters.AddWithValue("@Jenis_kelamin", karyawan.jenis_kelamin);
                command.Parameters.AddWithValue("@Alamat", karyawan.alamat);
                command.Parameters.AddWithValue("@NoTlp", karyawan.noTlp);
                command.Parameters.AddWithValue("@Id", id);

                connection.Open();
                return command.ExecuteNonQuery();
            }
        }
    }

    public int DeleteKaryawan(int id)
    {
        using (MySqlConnection connection = _connection)
        {
            string query = "DELETE FROM data_karyawan WHERE id = @Id";
            using (MySqlCommand command = new MySqlCommand(query, connection))
            {
                command.Parameters.AddWithValue("@Id", id);
                connection.Open();
                return command.ExecuteNonQuery();
            }
        }
    }


    //User
    public List<User> GetAllUsers()
    {
        List<User> userList = new List<User>();
        try
        {
            using (MySqlConnection connection = new MySqlConnection(connectionString))
            {
                string query = "SELECT * FROM datauser";
                MySqlCommand command = new MySqlCommand(query, connection);
                connection.Open();
                using (MySqlDataReader reader = command.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        User user = new User
                        {
                            id = Convert.ToInt32(reader["Id"]),
                            nama = reader["nama"].ToString(),
                            username = reader["Username"].ToString(),
                            password = reader["Password"].ToString(),
                            role = reader["role"].ToString(),
                        };
                        userList.Add(user);
                    }
                }
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine(ex.Message);
        }
        return userList;
    }

    public class IndeksUserInfo
    {
        public int id { get; set; }
        public string? nama { get; set; }
        public string? username { get; set; }
        public string? password { get; set; }
        public string? role { get; set; }
    }

    public List<IndeksUserInfo> GetByIdUsers(int user)
    {
        List<IndeksUserInfo> indeksUserList = new List<IndeksUserInfo>();
        try
        {
            using (MySqlConnection connection = _connection)
            {
                string query = "SELECT * FROM datauser WHERE id = ?";
                using (MySqlCommand command = new MySqlCommand(query, connection))
                {
                    command.Parameters.AddWithValue("@Id", user);
                    connection.Open();
                    using (MySqlDataReader reader = command.ExecuteReader())
                    {
                        while (reader.Read())
                        {
                            IndeksUserInfo info = new IndeksUserInfo
                            {
                                id = Convert.ToInt32(reader["Id"]),
                                nama = reader["nama"].ToString(),
                                username = reader["Username"].ToString(),
                                password = reader["Password"].ToString(),
                                role = reader["role"].ToString(),
                            };
                            indeksUserList.Add(info);
                        }
                    }
                }
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine(ex.Message);
        }
        return indeksUserList;
    }

    public int CreateUser(User user)
    {
        using (MySqlConnection connection = _connection)
        {
            string query = "INSERT INTO datauser (id, nama, username, password, role) VALUES (@Id, @Nama, @Username, @Password, @Role)";
            using (MySqlCommand command = new MySqlCommand(query, connection))
            {
                command.Parameters.AddWithValue("@Id", user.id);
                command.Parameters.AddWithValue("@Nama", user.nama);
                command.Parameters.AddWithValue("@username", user.username);
                command.Parameters.AddWithValue("@Password", user.password);
                command.Parameters.AddWithValue("@Role", user.role);

                connection.Open();
                return command.ExecuteNonQuery();
            }
        }
    }

    public int UpdateUser(int id, User user)
    {
        using (MySqlConnection connection = _connection)
        {
            string query = "UPDATE datauser SET nama = @Nama, username = @Username, password = @Password, role = @Role WHERE id = @Id";
            using (MySqlCommand command = new MySqlCommand(query, connection))
            {
                command.Parameters.AddWithValue("@Nama", user.nama);
                command.Parameters.AddWithValue("@username", user.username);
                command.Parameters.AddWithValue("@Password", user.password);
                command.Parameters.AddWithValue("@Role", user.role);
                command.Parameters.AddWithValue("@Id", id);

                connection.Open();
                return command.ExecuteNonQuery();
            }
        }
    }

    public int DeleteUser(int id)
    {
        using (MySqlConnection connection = _connection)
        {
            string query = "DELETE FROM datauser WHERE id = @Id";
            using (MySqlCommand command = new MySqlCommand(query, connection))
            {
                command.Parameters.AddWithValue("@Id", id);
                connection.Open();
                return command.ExecuteNonQuery();
            }
        }
    }

    //Transaksi
    public List<Transaksi> GetAllTransaksis()
    {
        List<Transaksi> transaksiList = new List<Transaksi>();
        try
        {
            using (MySqlConnection connection = new MySqlConnection(connectionString))
            {
                string query = @"SELECT dt.id, dt.idproduk, dp.namaproduk, dt.quantity, dt.tanggal, dt.hargatotal, dt.id_karyawan, dk.nama_karyawan
                FROM datatransaksi dt
                JOIN dataproduk dp ON dt.idproduk = dp.id
                JOIN data_karyawan dk ON dt.id_karyawan = dk.id";
                MySqlCommand command = new MySqlCommand(query, connection);
                connection.Open();
                using (MySqlDataReader reader = command.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        Transaksi transaksi = new Transaksi
                        {
                            id = Convert.ToInt32(reader["Id"]),
                            idproduk = Convert.ToInt32(reader["Idproduk"]),
                            namaproduk = reader["NamaProduk"].ToString(),
                            quantity = Convert.ToInt32(reader["Quantity"]),
                            tanggal = reader.GetDateTime(reader.GetOrdinal("Tanggal")),
                            hargatotal = Convert.ToInt32(reader["hargatotal"]),
                            id_karyawan = Convert.ToInt32(reader["Id_karyawan"]),
                            nama_karyawan = reader["Nama_karyawan"].ToString()
                        };
                        transaksiList.Add(transaksi);
                    }
                }
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine(ex.Message);
        }
        return transaksiList;
    }
   public int CreateTransaksi(Transaksi transaksi)
    {
        using (MySqlConnection connection = _connection)
        {
            string queryGetHargaSatuan = "SELECT hargasatuan FROM dataproduk WHERE id = @Idproduk";
            MySqlCommand commandGetHargaSatuan = new MySqlCommand(queryGetHargaSatuan, connection);
            commandGetHargaSatuan.Parameters.AddWithValue("@Idproduk", transaksi.idproduk);

            connection.Open();
            int hargasatuan = Convert.ToInt32(commandGetHargaSatuan.ExecuteScalar());
            connection.Close();

            // Kemudian, hitung hargatotal
            transaksi.hargatotal = transaksi.quantity * hargasatuan;
            string query = "INSERT INTO datatransaksi (idproduk, quantity, tanggal, hargatotal, id_karyawan) " +
                           "VALUES (@Idproduk, @Quantity, @Tanggal, @Hargatotal, @Id_karyawan)";
            using (MySqlCommand command = new MySqlCommand(query, connection))
            {
                command.Parameters.AddWithValue("@Idproduk", transaksi.idproduk);
                command.Parameters.AddWithValue("@Quantity", transaksi.quantity);
                command.Parameters.AddWithValue("@Tanggal", transaksi.tanggal);
                command.Parameters.AddWithValue("@Hargatotal", transaksi.hargatotal);
                command.Parameters.AddWithValue("@Id_karyawan", transaksi.id_karyawan);

                connection.Open();
                int result = command.ExecuteNonQuery();
                connection.Close();

                // Kurangi stok di tabel Dataproduk
                string queryUpdateStok = "UPDATE dataproduk SET stock = stock - @Quantity WHERE id = @Idproduk";
                using (MySqlCommand commandUpdateStok = new MySqlCommand(queryUpdateStok, connection))
                {
                    commandUpdateStok.Parameters.AddWithValue("@Idproduk", transaksi.idproduk);
                    commandUpdateStok.Parameters.AddWithValue("@Quantity", transaksi.quantity);

                    connection.Open();
                    commandUpdateStok.ExecuteNonQuery();
                }

                return result;
            }
        }
    }

}
