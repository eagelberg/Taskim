package Infrastructure;

import com.fasterxml.jackson.databind.JsonNode;
import play.libs.Json;

/**
 * Created by itay on 2/15/14.
 */
public class JacksonJsonMapper implements IJsonMapper {
    @Override
    public JsonNode toJson(Object object) {
        return Json.toJson(object);
    }
}
