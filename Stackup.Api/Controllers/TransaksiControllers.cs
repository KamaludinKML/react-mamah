using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Data;

[ApiController]

public class TransaksiController : ControllerBase
{
    private readonly DbManager _dbManager;

    Response response = new Response();

    public TransaksiController(IConfiguration configuration)
    {
        _dbManager = new DbManager(configuration);
    }

    [HttpGet]
    [Route("Transaksi/GetAllTransaksi")]

    public IActionResult GetTransaksis()
    {
        try
        {
            response.status = 200;
            response.message = "success";
            response.data = _dbManager.GetAllTransaksis();
        }
        catch (Exception ex)
        {
            response.status = 500;
            response.message = ex.Message;
        }
        return Ok(response);
    }

    [HttpPost]
    [Route("Transaksi/CreateTransaksi")]

    public IActionResult CreateTransaksi([FromBody] Transaksi transaksi)
    {
        try
        {
            response.status = 200;
            response.message = "success";
            _dbManager.CreateTransaksi(transaksi);
        }
        catch (Exception ex)
        {
            response.status = 500;
            response.message = ex.Message;
        }
        return Ok(response);
    }
}