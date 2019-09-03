export class AccountService {

    get() {
        return [
            {
                "id": 1,
                "name": "teste1",
                "password": "123456"
            },
            {
                "id": 2,
                "name": "teste2",
                "password": "123456"
            }
        ]
    }

    find(dto) {
        return {
            "id": dto.id(),
            "name": "teste1",
            "password": "123456"
        }
    }

    create(dto) {
        return dto;
    }

}