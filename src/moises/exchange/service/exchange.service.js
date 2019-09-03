export class ExchangeService {

    get() {
        return [
            {
                "id": 1,
                "tag": "MBT",
                "name": "Mercado Bitcoin"
            },
            {
                "id": 2,
                "tag": "NGC",
                "name": "Negocie Coins"
            }
        ]
    }

    find(dto) {
        return {
            "id": dto.id(),
            "tag": "MBT",
            "name": "Mercado Bitcoin"
        }
    }

    create(dto) {
        return dto;
    }

}