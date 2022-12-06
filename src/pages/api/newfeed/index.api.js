const posts = {
    "allIds": [
        "POST#TIME@2022_08_23_05_02_00#USER_ID@0005"
    ],
    "byId": {
        "POST#TIME@2022_08_23_05_02_00#USER_ID@0005": {
            "id": "POST#TIME@2022_08_23_05_02_00#USER_ID@0005",
            "author_id": "0005",
            "author_name": "Trần Thị Lan",
            "author_img_sml": "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?cs=srgb&dl=pexels-pixabay-45201.jpg&fm=jpg",
            "tags": [
                "áp lực gia đình"
            ],
            "react_count": 25,
            "comment_count": 11,
            "title": "Áp lực những năm cuối cấp",
            "body": "Em thực sự mệt mỏi rồi ạ! \n    Không biết ai có cảm giác như em chưa? Cái loại người mình ghét nhất, căm thù nhất giờ đây lại là mẹ mình 🙂 Khi viết ra những dòng này em vừa buồn, vừa thất vọng, vừa thấy tủi nhục. Bố mẹ em li dị được 7 năm rồi, lí do vì mẹ bị bố bạo hành. Hồi còn sống chung, bố không cho mẹ ăn diện, không cho mẹ đi đám cưới hay bất kì nơi nào có con trai. Em thương mẹ lắm, khoảng thời gian đó không ngày nào yên ổn vì bố mẹ cãi nhau đánh nhau. \n    Nhưng cuối cùng thì 2 người cũng bỏ được nhau, mỗi người 1 cuộc sống riêng, em sống cùng mẹ. Tư tưởng em thoáng lắm, mẹ hay bố quen ai sau này em đều rất tôn trọng và vui vẻ. Em nghĩ cho hạnh phúc riêng của họ vì bây giờ ai cũng đang độc thân. \n    Nhưng mọi người ơi, em thật sự sốc khi biết mẹ đang quen 1 chú đã có vợ con, vẫn đang sống cùng vợ con, mà con mới chỉ 1 tháng tuổi 🙂 Em khuyên mẹ rất nhiều lần là bỏ đi đừng làm điều đấy rồi nhưng vô ích mọi người ạ! Em nói nhẹ nhàng nhưng sau này cãi nhau rất nhiều lần với mẹ, khóc trước mặt mẹ cầu xin mẹ để yên cho gđ người ta nhưng chỉ nhận lại được câu “trẻ con chưa hiểu chuyện”? em đã 17 tuổi rồi! Chú đó hàng ngày vào ăn ngủ ở nhà em, thậm chí mẹ em đi vắng còn cho phép chú ấy vô nhà, mặc dù nhà chỉ có mình em. Em nói chú đó nhiều lần rồi mà thật sự vẫn vô ích mọi người ạ! Cả bà ngoại và họ hàng cũng chửi mẹ hết lần này đến lần khác nhưng mẹ vẫn không nghe, mẹ trách cả nhà không hiểu mẹ. Em thấy cảnh 2 người chăn gối trần chuồng với nhau không biết là bao nhiêu lần, em thật sự chán cái cảnh này, chán cái gia đình này, chán cuộc sống này!  \n    Mẹ em đã khổ mất 20 năm sống chung với bố, còn bây giờ thì lại đi phá hoại hạnh phúc gđ người khác… Em phải làm sao để vượt qua, làm sao để giúp mẹ tỉnh táo, làm sao để quên những cảnh dơ bẩn đấy bây giờ? \n    Em nói với mọi người cũng chỉ để nhẹ lòng hơn và được nghe tâm sự giúp phần nào cho hoàn cảnh này. Trong 1 năm nay em đã quá chán nản mệt mỏi, đêm nào cũng mất ngủ, vừa ám ảnh vừa lo cho mẹ. \n    Mọi người có thể giúp em ổn hơn được không?\n    ",
            "public_time": 1662352885706,
            "groups": ["Học đường"],
            "medias": [
                {
                    "type": "image",
                    "src": "https://phongkhamtamly.com/wp-content/uploads/2021/09/Ap-luc-hoc-tap-800x800.png"
                }
            ]
        }
    },
    "is_like": []
}

export default function handler(req, res) {
    switch (req.method) {
        case 'GET':
            res.status(200).json(posts)
            break;

        default:
            res.status(400).json({message : 'WRONG PATH'})
            break;
    }
}