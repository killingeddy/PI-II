const register = (email, name, password) => {
    return `
    INSERT INTO public.users
    ("name", email, "password")
    VALUES('${name}', '${email}', '${password}')    
    `;
};

const login = (email) => {
    return `
        SELECT *
        FROM users
        WHERE email = '${email}'
    `;
};

const edit = (id, email, name, password) => {
    return `
        UPDATE users
        SET email = '${email}', name = '${name}', password = '${password}'
        WHERE id = ${id}
        RETURNING id, email, name
    `;
};

const getUser = (id) => {
    return `
        SELECT *
        FROM users
        WHERE id = ${id}
    `;
};

module.exports = {
    register,
    login,
    edit,
    getUser
};