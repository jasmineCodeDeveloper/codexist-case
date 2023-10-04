package com.location.codeexist.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "places")
public class Places {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long LocationId;
	
	@Column(name = "adress_name")
	private String AdressName;
	
	@Column(name = "latitude")
	private double latitude;
	
	@Column(name = "longtitude")
	private double longitude;
	
	@Column(name = "radius")
	private double radius;
	
	//parametresiz kurucu metot tanımı
	public Places() {

	}

	public Places(String adressName, double latitude, double longitude, double radius) {
		super();
		AdressName = adressName;
		this.latitude = latitude;
		this.longitude = longitude;
		this.radius = radius;
	}

	public long getLocationId() {
		return LocationId;
	}

	public void setLocationId(long locationId) {
		LocationId = locationId;
	}

	public String getAdressName() {
		return AdressName;
	}

	public void setAdressName(String adressName) {
		AdressName = adressName;
	}

	public double getLatitude() {
		return latitude;
	}

	public void setLatitude(double latitude) {
		this.latitude = latitude;
	}

	public double getLongitude() {
		return longitude;
	}

	public void setLongitude(double longitude) {
		this.longitude = longitude;
	}

	public double getRadius() {
		return radius;
	}

	public void setRadius(double radius) {
		this.radius = radius;
	}

}
