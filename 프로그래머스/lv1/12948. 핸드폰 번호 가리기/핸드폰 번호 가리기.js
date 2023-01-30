function solution(phone_number) {
    const starLength = phone_number.length - 4;
    return '*'.repeat(starLength) + phone_number.slice(starLength);
}