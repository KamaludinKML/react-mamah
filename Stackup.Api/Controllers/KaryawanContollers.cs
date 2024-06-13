using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Data;

[ApiController]

public class KaryawanController : ControllerBase
{
    private readonly DbManager _dbManager;

    Response response = new Response();

    public KaryawanController(IConfiguration configuration)
    {
        _dbManager = new DbManager(configuration);
    }

    [HttpGet]
    [Route("Karyawan/GetAllKaryawan")]

    public IActionResult GetKaryawans()
    {
        try
        {
            response.status = 200;
            response.message = "success";
            response.data = _dbManager.GetAllKaryawans();
        }
        catch (Exception ex)
        {
            response.status = 500;
            response.message = ex.Message;
        }
        return Ok(response);
    }

    [HttpGet]
    [Route("Karyawan/GetByIdKaryawan")]

    public IActionResult GetByIdKaryawans(int id)
    {
        var IndeksKaryawanInfo = _dbManager.GetByIdKaryawans(id);
        if (IndeksKaryawanInfo == null)
        {
            return NotFound();
        }
        return Ok(IndeksKaryawanInfo);
    }

    [HttpPost]
    [Route("Karyawan/CreateKaryawan")]

    public IActionResult CreateKaryawan([FromBody] Karyawan karyawan)
    {
        try
        {
            response.status = 200;
            response.message = "success";
            _dbManager.CreateKaryawan(karyawan);
        }
        catch (Exception ex)
        {
            response.status = 500;
            response.message = ex.Message;
        }
        return Ok(response);
    }

    [HttpPut]
    [Route("Karyawan/UpdateKaryawan")]
    public IActionResult UpdateKaryawan(int id, [FromBody] Karyawan karyawan)
    {
        try
        {
            response.status = 200;
            response.message = "success";
            _dbManager.UpdateKaryawan(id, karyawan);
        }
        catch (Exception ex)
        {
            response.status = 500;
            response.message = ex.Message;
        }
        return Ok(response);
    }

    [HttpDelete]
    [Route("Karyawan/DeleteKaryawan")]
    public IActionResult DeleteKaryawan(int id)
    {
        try
        {
            response.status = 200;
            response.message = "success";
            _dbManager.DeleteKaryawan(id);
        }
        catch (Exception ex)
        {
            response.status = 500;
            response.message = ex.Message;
        }
        return Ok(response);
    }
}