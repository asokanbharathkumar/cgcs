package com.example.demo.model;

public class AuthenticationResponse {
//authentication response for storing token	
	private String response;

	public AuthenticationResponse() {
		
	}

	public AuthenticationResponse(String response) {
		this.response=response;
	}
	
	public String getResponse() {
		return response;
	}

	public void setResponse(String response) {
		this.response = response;
	}
	
	
	

}
