CREATE SCHEMA IF NOT EXISTS jordan_dev;
USE jordan_dev ;

CREATE TABLE IF NOT EXISTS jordan_dev.`city` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(200) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS jordan_dev.`player` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(200) NOT NULL,
  `age` DATE NOT NULL,
  `height` INT NOT NULL,
  `weight` INT NOT NULL,
  `predominant_hand` VARCHAR(45) NOT NULL,
  `city_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_player_city1_idx` (`city_id` ASC) VISIBLE,
  CONSTRAINT `fk_player_city1`
    FOREIGN KEY (`city_id`)
    REFERENCES jordan_dev.`city` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS jordan_dev.`arena` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `capacity` INT NOT NULL,
  `city_id` INT NOT NULL,
  `name` VARCHAR(200) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_arena_city1_idx` (`city_id` ASC) VISIBLE,
  CONSTRAINT `fk_arena_city1`
    FOREIGN KEY (`city_id`)
    REFERENCES jordan_dev.`city` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS jordan_dev.`team` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(200) NOT NULL,
  `mascot` VARCHAR(45) NOT NULL,
  `city_id` INT NOT NULL,
  `arena_id` INT NOT NULL,
  `logo` TEXT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_team_city1_idx` (`city_id` ASC) VISIBLE,
  INDEX `fk_team_arena1_idx` (`arena_id` ASC) VISIBLE,
  CONSTRAINT `fk_team_city1`
    FOREIGN KEY (`city_id`)
    REFERENCES jordan_dev.`city` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_team_arena1`
    FOREIGN KEY (`arena_id`)
    REFERENCES jordan_dev.`arena` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS jordan_dev.`position` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS jordan_dev.`player_has_position` (
  `player_id` INT NOT NULL,
  `position_id` INT NOT NULL,
  PRIMARY KEY (`player_id`, `position_id`),
  INDEX `fk_players_has_position_position1_idx` (`position_id` ASC) VISIBLE,
  INDEX `fk_players_has_position_players_idx` (`player_id` ASC) VISIBLE,
  CONSTRAINT `fk_players_has_position_players`
    FOREIGN KEY (`player_id`)
    REFERENCES jordan_dev.`player` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_players_has_position_position1`
    FOREIGN KEY (`position_id`)
    REFERENCES jordan_dev.`position` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS jordan_dev.`player_has_team` (
  `player_id` INT NOT NULL,
  `team_id` INT NOT NULL,
  `id` INT NOT NULL,
  `date_sign` DATE NOT NULL,
  `date_leave` DATE NULL,
  INDEX `fk_player_has_team_team1_idx` (`team_id` ASC) VISIBLE,
  INDEX `fk_player_has_team_player1_idx` (`player_id` ASC) VISIBLE,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_player_has_team_player1`
    FOREIGN KEY (`player_id`)
    REFERENCES jordan_dev.`player` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_player_has_team_team1`
    FOREIGN KEY (`team_id`)
    REFERENCES jordan_dev.`team` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

