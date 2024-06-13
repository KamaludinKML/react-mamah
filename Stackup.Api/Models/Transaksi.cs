public class Transaksi
{
    public int id { get; set; }
    public int idproduk { get; set; }
    public string? namaproduk { get; set; }
    public int quantity { get; set; }
    public DateTime tanggal { get; set; }
    public int hargatotal { get; set; }
    public int id_karyawan { get; set; }
    public string? nama_karyawan { get; set; }
}