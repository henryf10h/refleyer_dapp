export const MainnetrFactoryAddress = "0x04e4629c17134eb1f9ce6f77620bfb003f0f618d15dfb15078c3411522031184"
export const SepoliaFactoryAddress = "0x03201fcbe37682e6e44ea0fc581e35ccfda63c15125685586e437a6f6784bcfb"

export const factoryABI = [
    {
      "name": "TokenFactory",
      "type": "impl",
      "interface_name": "reflect_cairo::contracts::reflect_factory::IReflectFactory"
    },
    {
      "name": "core::integer::u256",
      "type": "struct",
      "members": [
        {
          "name": "low",
          "type": "core::integer::u128"
        },
        {
          "name": "high",
          "type": "core::integer::u128"
        }
      ]
    },
    {
      "name": "core::result::Result::<core::starknet::contract_address::ContractAddress, core::array::Array::<core::felt252>>",
      "type": "enum",
      "variants": [
        {
          "name": "Ok",
          "type": "core::starknet::contract_address::ContractAddress"
        },
        {
          "name": "Err",
          "type": "core::array::Array::<core::felt252>"
        }
      ]
    },
    {
      "name": "reflect_cairo::contracts::reflect_factory::IReflectFactory",
      "type": "interface",
      "items": [
        {
          "name": "create_token",
          "type": "function",
          "inputs": [
            {
              "name": "name",
              "type": "core::felt252"
            },
            {
              "name": "symbol",
              "type": "core::felt252"
            },
            {
              "name": "supply",
              "type": "core::integer::u256"
            },
            {
              "name": "creator",
              "type": "core::starknet::contract_address::ContractAddress"
            }
          ],
          "outputs": [
            {
              "type": "core::result::Result::<core::starknet::contract_address::ContractAddress, core::array::Array::<core::felt252>>"
            }
          ],
          "state_mutability": "external"
        },
        {
          "name": "update_token_class_hash",
          "type": "function",
          "inputs": [
            {
              "name": "token_class_hash",
              "type": "core::starknet::class_hash::ClassHash"
            }
          ],
          "outputs": [],
          "state_mutability": "external"
        }
      ]
    },
    {
      "name": "OwnableImpl",
      "type": "impl",
      "interface_name": "openzeppelin::access::ownable::interface::IOwnable"
    },
    {
      "name": "openzeppelin::access::ownable::interface::IOwnable",
      "type": "interface",
      "items": [
        {
          "name": "owner",
          "type": "function",
          "inputs": [],
          "outputs": [
            {
              "type": "core::starknet::contract_address::ContractAddress"
            }
          ],
          "state_mutability": "view"
        },
        {
          "name": "transfer_ownership",
          "type": "function",
          "inputs": [
            {
              "name": "new_owner",
              "type": "core::starknet::contract_address::ContractAddress"
            }
          ],
          "outputs": [],
          "state_mutability": "external"
        },
        {
          "name": "renounce_ownership",
          "type": "function",
          "inputs": [],
          "outputs": [],
          "state_mutability": "external"
        }
      ]
    },
    {
      "name": "OwnableCamelOnlyImpl",
      "type": "impl",
      "interface_name": "openzeppelin::access::ownable::interface::IOwnableCamelOnly"
    },
    {
      "name": "openzeppelin::access::ownable::interface::IOwnableCamelOnly",
      "type": "interface",
      "items": [
        {
          "name": "transferOwnership",
          "type": "function",
          "inputs": [
            {
              "name": "newOwner",
              "type": "core::starknet::contract_address::ContractAddress"
            }
          ],
          "outputs": [],
          "state_mutability": "external"
        },
        {
          "name": "renounceOwnership",
          "type": "function",
          "inputs": [],
          "outputs": [],
          "state_mutability": "external"
        }
      ]
    },
    {
      "name": "constructor",
      "type": "constructor",
      "inputs": [
        {
          "name": "owner",
          "type": "core::starknet::contract_address::ContractAddress"
        },
        {
          "name": "token_class_hash",
          "type": "core::starknet::class_hash::ClassHash"
        }
      ]
    },
    {
      "kind": "struct",
      "name": "openzeppelin::access::ownable::ownable::Ownable::OwnershipTransferred",
      "type": "event",
      "members": [
        {
          "kind": "data",
          "name": "previous_owner",
          "type": "core::starknet::contract_address::ContractAddress"
        },
        {
          "kind": "data",
          "name": "new_owner",
          "type": "core::starknet::contract_address::ContractAddress"
        }
      ]
    },
    {
      "kind": "enum",
      "name": "openzeppelin::access::ownable::ownable::Ownable::Event",
      "type": "event",
      "variants": [
        {
          "kind": "nested",
          "name": "OwnershipTransferred",
          "type": "openzeppelin::access::ownable::ownable::Ownable::OwnershipTransferred"
        }
      ]
    },
    {
      "kind": "enum",
      "name": "reflect_cairo::contracts::reflect_factory::ReflectFactory::Event",
      "type": "event",
      "variants": [
        {
          "kind": "nested",
          "name": "OwnableEvent",
          "type": "openzeppelin::access::ownable::ownable::Ownable::Event"
        }
      ]
    }
  ]