cmake_minimum_required(VERSION 3.14)
project(scaling_telegram)

set(CMAKE_CXX_STANDARD 11)

include_directories(rapidjson)

set(CMAKE_CXX_FLAGS "-target cheerp -cheerp-mode=wasm -cheerp-wasm-loader=loader.js")

add_executable(yayyy.wasm main.cpp)
