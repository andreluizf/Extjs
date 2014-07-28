package com.rest.api;


public class Person {
	private String NAME;
	private String LOCATION;

	// Getters and setters are not required for this example.
	// GSON sets the fields directly using reflection.
	public Person() {
		// TODO Auto-generated constructor stub
	}
	

	public Person(String nAME, String lOCATION) {
		super();
		NAME = nAME;
		LOCATION = lOCATION;
	}


	@Override
	public String toString() {
		return NAME + " - " + LOCATION;
	}
}