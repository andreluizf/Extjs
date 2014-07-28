package com.rest.api;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import javax.ws.rs.ApplicationPath;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.core.Application;

import com.google.gson.Gson;

@ApplicationPath("/web")
@Path("/api")
public class RestApi extends Application {
	@GET
	public String lista() {
		System.out.println("listagem :::: ");
		Gson gson = new Gson();
		String userJSONString = gson
				.toJson(new Person("Andre", "av sao paulo"));
		return userJSONString;
	}

	@GET
	@Path("/novo")
	public String listagem() {
		System.out.println("listagem :::: ");
		Gson gson = new Gson();
		List<Person> lists = new ArrayList<Person>();
		lists.add(new Person("Andre", "av sao paulo"));
		lists.add(new Person("renata", "av astao"));
		lists.add(new Person("Vanida", "av. mga"));
		HashMap<String, Object> maps = new HashMap<String, Object>();
		maps.put("total", lists.size());
		maps.put("person", lists);
		String userJSONString = gson.toJson(maps);
		return userJSONString;
	}

//	@POST
//	@Path("/receitas")
//	@Consumes("application/x-www-form-urlencoded")
//	@Produces("application/json;charset=UTF-8;")
//	public List<AppReceitas> listaReceitas(
//			MultivaluedMap<String, String> formParams) {
//		try {
//			if (UsuarioHelper.login(formParams.get("login").get(0), formParams
//					.get("pass").get(0))) {
//
//				ReceitasService receitasService = new ReceitasService();
//				List<AppReceitas> lists = new ArrayList<AppReceitas>();
//				lists = receitasService.findAll();
//				return lists;
//			} else {
//				return new ArrayList<AppReceitas>();
//			}
//		} catch (Exception e) {
//			e.printStackTrace();
//			return null;
//		}
//
//	}
}
