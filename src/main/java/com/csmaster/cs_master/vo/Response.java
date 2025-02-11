package com.csmaster.cs_master.vo;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Builder;
import lombok.Getter;

@Getter
public class Response<T>  {
    private final Boolean success;
    private final String message;
    @JsonInclude(JsonInclude.Include.NON_NULL)
    private final T data;

    @Builder
    public Response(Boolean success, String message, T data) {
        this.success = success;
        this.message = message;
        this.data = data;
    }
}
