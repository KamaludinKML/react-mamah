using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Data;

[ApiController]

public class UserController : ControllerBase
{
    private readonly DbManager _dbManager;

    Response response = new Response();

    public UserController(IConfiguration configuration)
    {
        _dbManager = new DbManager(configuration);
    }

    [HttpGet]
    [Route("User/GetAllUser")]

    public IActionResult GetUsers()
    {
        try
        {
            response.status = 200;
            response.message = "success";
            response.data = _dbManager.GetAllUsers();
        }
        catch (Exception ex)
        {
            response.status = 500;
            response.message = ex.Message;
        }
        return Ok(response);
    }

    [HttpGet]
    [Route("User/GetByIdUser")]

    public IActionResult GetByIdUsers(int id)
    {
        var IndeksUserInfo = _dbManager.GetByIdUsers(id);
        if (IndeksUserInfo == null)
        {
            return NotFound();
        }
        return Ok(IndeksUserInfo);
    }

    [HttpPost]
    [Route("User/CreateUser")]

    public IActionResult CreateUser([FromBody] User user)
    {
        try
        {
            response.status = 200;
            response.message = "success";
            _dbManager.CreateUser(user);
        }
        catch (Exception ex)
        {
            response.status = 500;
            response.message = ex.Message;
        }
        return Ok(response);
    }

    [HttpPut]
    [Route("User/UpdateUser")]
    public IActionResult UpdateUser(int id, [FromBody] User user)
    {
        try
        {
            response.status = 200;
            response.message = "success";
            _dbManager.UpdateUser(id, user);
        }
        catch (Exception ex)
        {
            response.status = 500;
            response.message = ex.Message;
        }
        return Ok(response);
    }

    [HttpDelete]
    [Route("User/DeleteUser")]
    public IActionResult DeleteUser(int id)
    {
        try
        {
            response.status = 200;
            response.message = "success";
            _dbManager.DeleteUser(id);
        }
        catch (Exception ex)
        {
            response.status = 500;
            response.message = ex.Message;
        }
        return Ok(response);
    }
}