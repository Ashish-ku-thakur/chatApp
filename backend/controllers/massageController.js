import Conversation from "../models/conversationSchema.js";
import Massage from "../models/massageSchema.js";
import { getReceiverSocketId, io } from "../socket/socket.js";

//massageCreate
export let MassageCreate = async (req, res) => {
  try {
    let { text } = req.body;
    let loggedinuserId = req.userId;
    let receiverId = req.params.id;

    // basic validation
    if (!text || !loggedinuserId || !receiverId == undefined) {
      return res.status(400).json({
        success: false,
        massage: "selUser, loggUser & mass are require in massageCreate",
      });
    }

    if (text == undefined || "") {
      return res.status(400).json({
        success: false,
        massage: "text is not be undefined or ''",
      });
    }

    // console.log(text);

    let findGroup = await Conversation.findOne({
      group: { $all: [loggedinuserId, receiverId] },
    });

    // if not find
    if (!findGroup) {
      findGroup = await Conversation.create({
        group: [loggedinuserId, receiverId],
      });
    }

    let newMassage = await Massage.create({
      senderId: loggedinuserId,
      receiverId,
      massage: text,
    });

    if (newMassage) {
      //   push;
      findGroup.chates.push(newMassage._id);
    }
    await findGroup.save();

    // socket io
    let receiverSocketId = getReceiverSocketId(receiverId);
    //  console.log(receiverSocketId);
    if (receiverSocketId) {
      io.to(receiverSocketId).emit("newMassage", newMassage);
    }

    return res.status(201).json(newMassage);
  } catch (error) {
    console.log(error);
  }
};

// particular getAllMassage
export let GetAllMassage = async (req, res) => {
  try {
    let loggedinuserId = req.userId;
    let receiverId = req.params.id;

    // basic validation
    if (!loggedinuserId || !receiverId) {
      return res.status(400).json({
        success: false,
        massage: "selUser & loggUser are require in getallmassage",
      });
    }

    if (receiverId == undefined || null || "") {
      return res.status(400).json({
        success: false,
        massage: "receiverId is blank",
      });
    }

    let findGroup = await Conversation.findOne({
      group: { $all: [loggedinuserId, receiverId] },
    }).populate("chates");

    return res.status(200).json(findGroup);
  } catch (error) {
    console.log(error);
  }
};
