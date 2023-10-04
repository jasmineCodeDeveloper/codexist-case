package com.location.codeexist.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.location.codeexist.model.Places;
@Repository
public interface PlacesRepository extends JpaRepository<Places,Long>{
	

}
