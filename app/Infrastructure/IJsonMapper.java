package Infrastructure;

import com.fasterxml.jackson.databind.JsonNode;

/**
 * Created by itay on 2/15/14.
 */
public interface IJsonMapper {
    JsonNode toJson(Object object);
}
