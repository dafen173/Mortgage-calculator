create TABLE users(
    id SERIAL PRIMARY KEY,
    username VARCHAR(255),
    groupname VARCHAR(255),
    created VARCHAR(255)
);


create TABLE groups(
    id SERIAL PRIMARY KEY,
    groupname VARCHAR(255),
    groupdescription VARCHAR(255),
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES users (id)
);




create TABLE banks(
    id SERIAL PRIMARY KEY,
    bankname VARCHAR(255),
    interest_rate INTEGER,
    max_loan INTEGER,
    down_payment INTEGER,
    loan_term INTEGER
);

