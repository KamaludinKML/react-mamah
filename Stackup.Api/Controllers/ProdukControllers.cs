using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Data;

[ApiController]

public class ProdukController : ControllerBase
{
    private readonly DbManager _dbManager;

    Response response = new Response();

    public ProdukController(IConfiguration configuration)
    {
        _dbManager = new DbManager(configuration);
    }

    [HttpGet]
    [Route("Produk/GetAllProduk")]

    public IActionResult GetProduks()
    {
        try
        {
            response.status = 200;
            response.message = "success";
            response.data = _dbManager.GetAllProduks();
        }
        catch (Exception ex)
        {
            response.status = 500;
            response.message = ex.Message;
        }
        return Ok(response);
    }

    [HttpGet]
    [Route("Produk/GetByIdProduk")]

    public IActionResult GetByIdProduks(int id)
    {
        var IndeksProdukInfo = _dbManager.GetByIdProduks(id);
        if (IndeksProdukInfo == null)
        {
            return NotFound();
        }
        return Ok(IndeksProdukInfo);
    }

    [HttpPost]
    [Route("Produk/CreateProduk")]

    public IActionResult CreateProduk([FromBody] Produk produk)
    {
        try
        {
            response.status = 200;
            response.message = "success";
            _dbManager.CreateProduk(produk);
        }
        catch (Exception ex)
        {
            response.status = 500;
            response.message = ex.Message;
        }
        return Ok(response);
    }

    [HttpPut]
    [Route("Produk/UpdateProduk")]
    public IActionResult UpdateProduk(int id,[FromBody] Produk produk)
    {
        try
        {
            response.status = 200;
            response.message = "success";
            _dbManager.UpdateProduk(id, produk);
        }
        catch (Exception ex)
        {
            response.status = 500;
            response.message = ex.Message;
        }
        return Ok(response);
    }

    [HttpDelete]
    [Route("Produk/DeleteProduk")]
    public IActionResult DeleteProduk(int id)
    {
        try
        {
            response.status = 200;
            response.message = "success";
            _dbManager.DeleteProduk(id);  
        }
        catch (Exception ex)
        {
            response.status = 500;
            response.message = ex.Message;
        }
        return Ok(response);
    }
}